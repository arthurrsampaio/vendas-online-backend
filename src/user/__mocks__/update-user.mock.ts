import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: 'abc',
  newPassword: 'newpassmock',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: 'wrongpassmock',
  newPassword: 'newpassmock',
};
