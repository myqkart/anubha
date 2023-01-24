export const onlyChars = (form) => {
  if (form.name) {
    if ( form.name.toString().match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) ) return null;
    return "Invalid Name.";
  } else {
    return "Name is required.";
  }
};

export const emailValidator = (form) => {
  // RFC 2822 compliant regex
  if (
    form.email &&
    form.email.match(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    )
  ) {
    return null;
  } else if (!form.email) return "E-mail is required.";

  return "Invalid E-mail.";
};

export const checkNumber = (form) => {
  if (form.num) {
    const mobCheck = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (mobCheck.test(form.num)) return null;
    return "Invalid Number.";
  } else return "Number is required.";
};

export const checkMsg = (form) => {
  if (form && form.msg) return null;
  return "Message is required.";
};
