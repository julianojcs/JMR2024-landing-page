// Exportações dos modelos MongoDB
export { default as Account } from './Account.js';
export { default as Event } from './Event.js';
export { default as Lecture } from './Lecture.js';
export { default as PasswordReset } from './PasswordReset.js';
export { default as Session } from './Session.js';
export { default as Society } from './Society.js';
export {
  default as User,
  Professional,
  Speaker,
  Moderator,
  Debater
} from './User.js';
export {
  default as Certificate,
  Attendee,
  Speaker as CertificateSpeaker,
  Debater as CertificateDebater,
  Moderator as CertificateModerator,
  WorkPresentation,
  AwardedWork
} from './Certificate.js';
