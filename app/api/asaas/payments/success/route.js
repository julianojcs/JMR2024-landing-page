import { NextResponse } from 'next/server';

export async function POST(req) {
  // Objeto para armazenar todos os dados capturados
  const responseData = {
    timestamp: new Date().toISOString(),
    requestInfo: {},
    headers: {},
    queryParams: {},
    requestBody: {},
    parsedData: {},
    success: true
  };

  try {
    // Captura do URL e método
    console.log('\n========== CALLBACK RECEBIDO ==========');
    console.log('Timestamp:', responseData.timestamp);
    console.log('URL:', req.url);
    console.log('Método:', req.method);

    responseData.requestInfo = {
      url: req.url,
      method: req.method
    };

    // Captura dos headers
    console.log('\n---------- HEADERS ----------');
    const headers = Object.fromEntries(req.headers);
    console.log(JSON.stringify(headers, null, 2));

    responseData.headers = headers;

    // Captura dos parâmetros de query
    console.log('\n---------- QUERY PARAMS ----------');
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);
    console.log(JSON.stringify(queryParams, null, 2));

    responseData.queryParams = queryParams;

    // Captura do corpo da requisição
    console.log('\n---------- CORPO DA REQUISIÇÃO ----------');
    let body;
    try {
      body = await req.json();
      console.log(JSON.stringify(body, null, 2));

      responseData.requestBody = body;

      // Explorar a estrutura do objeto recebido
      if (body && typeof body === 'object') {
        console.log('\n---------- ESTRUTURA DO OBJETO ----------');
        const propertyList = Object.keys(body);
        console.log('Propriedades encontradas:', propertyList.join(', '));

        responseData.parsedData.propertyList = propertyList;

        // Verifica se alguma dessas propriedades comuns existe
        const commonProperties = [
          'id', 'payment', 'event', 'status', 'customer', 'value',
          'billingType', 'description', 'dateCreated', 'type',
          'invoiceUrl', 'netValue', 'originalValue', 'externalReference'
        ];

        console.log('\n---------- PROPRIEDADES ESPECÍFICAS ----------');
        const foundProperties = {};
        commonProperties.forEach(prop => {
          if (body[prop] !== undefined) {
            console.log(`${prop}:`, typeof body[prop] === 'object'
              ? JSON.stringify(body[prop])
              : body[prop]
            );
            foundProperties[prop] = body[prop];
          }
        });

        responseData.parsedData.commonProperties = foundProperties;

        // Verifica se há objeto de pagamento aninhado
        if (body.payment && typeof body.payment === 'object') {
          console.log('\n---------- OBJETO PAYMENT ANINHADO ----------');
          console.log(JSON.stringify(body.payment, null, 2));

          responseData.parsedData.paymentObject = body.payment;

          // Extrai propriedades específicas do objeto payment
          const paymentProperties = {};
          commonProperties.forEach(prop => {
            if (body.payment[prop] !== undefined) {
              paymentProperties[prop] = body.payment[prop];
            }
          });

          responseData.parsedData.paymentProperties = paymentProperties;
        }
      }
    } catch (e) {
      console.log('Não foi possível parsejar o corpo como JSON');
      try {
        body = await req.text();
        console.log('Corpo como texto:', body);

        responseData.requestBody = { rawText: body };
        responseData.parsedData.error = 'Corpo não é um JSON válido';
      } catch (textError) {
        console.log('Erro ao obter corpo como texto:', textError.message);
        responseData.requestBody = { error: 'Não foi possível capturar o corpo da requisição' };
      }
    }

    console.log('==========================================\n');

    // Adiciona análise recomendada com base nos dados capturados
    responseData.analysis = {
      possibleStructure: responseData.parsedData.propertyList ?
        (responseData.parsedData.propertyList.includes('payment') ? 'webhook' : 'direct') : 'unknown',
      recommendation: 'Verifique os dados capturados para entender a estrutura completa do callback'
    };

    // Retornamos todos os dados capturados na resposta
    return NextResponse.json({
      success: true,
      message: 'Callback recebido e processado com sucesso',
      capturedData: responseData
    });

  } catch (error) {
    console.error('Erro ao processar callback:', error);

    // Mesmo com erro, tenta retornar os dados que foram coletados até o momento
    responseData.success = false;
    responseData.error = {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };

    return NextResponse.json(
      {
        success: false,
        message: 'Falha ao processar callback',
        error: error.message,
        capturedData: responseData
      },
      { status: 500 }
    );
  }
}

// Também capturar requisições GET se houverem
export async function GET(req) {
  return POST(req);
}