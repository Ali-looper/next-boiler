export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  /**
   * Password Requirements:
   * - At least 8 characters
   * - At least one uppercase letter
   * - At least one lowercase letter
   * - At least one number
   * - At least one special character (@$!%*?& etc.)
   */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidUsername = (username: string): boolean => {
  /**
   * Username Requirements:
   * - 3 to 16 characters
   * - Only letters, numbers, underscores, and hyphens
   */
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  return usernameRegex.test(username);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  /**
   * Phone Number Requirements:
   * - Supports various formats (international & local)
   * - Allows + for country codes
   */
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

export const isValidDate = (date: string): boolean => {
  /**
   * Validates if a string is a properly formatted date (YYYY-MM-DD)
   */
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date) && !isNaN(Date.parse(date));
};

export const isEmpty = (value: string): boolean => {
  return value.trim() === '';
};
