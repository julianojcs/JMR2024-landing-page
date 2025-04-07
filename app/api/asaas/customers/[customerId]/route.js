import { NextResponse } from 'next/server';
import { apiKey, apiUrl } from '@/api/asaas/config';

export async function GET(request, { params }) {
  try {
    const { customerId } = params;

    if (!customerId) {
      return NextResponse.json({
        success: false,
        error: "Customer ID is required"
      }, { status: 400 });
    }

    const response = await fetch(
      `${apiUrl}/customers/${customerId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'access_token': apiKey
        }
      }
    );

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      // Para erros 404, retornar mensagem específica sem tentar parsear o corpo
      if (response.status === 404) {
        return NextResponse.json({
          success: false,
          error: "Customer not found",
          message: "The requested customer could not be found",
          customerId: customerId
        }, { status: 404 });
      }

      // Para outros erros, tente parsear o corpo somente se tiver conteúdo
      let errorMessage = "Error fetching customer details";
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.errors?.[0]?.description || errorMessage;
        }
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
      }

      return NextResponse.json({
        success: false,
        error: "API Error",
        message: errorMessage,
        statusCode: response.status
      }, { status: response.status });
    }

    // Verificar se há conteúdo antes de tentar fazer parsing
    const contentLength = response.headers.get("content-length");
    if (contentLength === "0") {
      return NextResponse.json({
        success: false,
        error: "No data available",
        message: "The customer exists but no data was returned"
      }, { status: 204 });
    }

    try {
    // Obter dados se a resposta foi bem-sucedida e tem conteúdo
      const data = await response.json();

      // Se a API retornar um objeto vazio
      if (!data || Object.keys(data).length === 0) {
        return NextResponse.json({
          success: false,
          error: "No data available",
          message: "The customer exists but no data is available"
        }, { status: 204 });
      }

      // Resposta normal com os dados do cliente
      return NextResponse.json({
        success: true,
        data: data
      });
    } catch (parseError) {
      console.error("Failed to parse successful response:", parseError);
      return NextResponse.json({
        success: false,
        error: "Parse Error",
        message: "Could not parse response from customer server"
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error fetching customer details:', error);
    return NextResponse.json({
      success: false,
      error: "Server Error",
      message: error.message || "An unexpected error occurred"
    }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { customerId } = params;

    if (!customerId) {
      return NextResponse.json({
        success: false,
        error: "Customer ID is required"
      }, { status: 400 });
    }

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json({
        success: false,
        error: "Invalid JSON",
        message: "Request body is not valid JSON"
      }, { status: 400 });
    }

    const response = await fetch(
      `${apiUrl}/customers/${customerId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'access_token': apiKey
        },
        body: JSON.stringify(body)
      }
    );

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      // Para erros 404, retornar mensagem específica
      if (response.status === 404) {
        return NextResponse.json({
          success: false,
          error: "Customer not found",
          message: "The customer you're trying to update could not be found",
          customerId: customerId
        }, { status: 404 });
      }

      // Para outros erros, tente parsear o corpo
      let errorMessage = "Error updating customer";
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.errors?.[0]?.description || errorMessage;
        }
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
      }

      return NextResponse.json({
        success: false,
        error: "API Error",
        message: errorMessage,
        statusCode: response.status
      }, { status: response.status });
    }

    // Processar resposta bem-sucedida
    try {
      const responseData = await response.json();
      return NextResponse.json({
        success: true,
        data: responseData
      });
    } catch (parseError) {
      console.error("Failed to parse successful response:", parseError);
      return NextResponse.json({
        success: false,
        error: "Parse Error",
        message: "Could not parse response from customer server"
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error updating customer:', error);
    return NextResponse.json({
      success: false,
      error: "Server Error",
      message: error.message || "An unexpected error occurred while updating customer"
    }, { status: 500 });
  }
}