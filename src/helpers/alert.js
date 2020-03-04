import * as toastr from 'toastr';

export const successMessage = (one, two) => {
   toastr.success(one, two);
}

export const errorMessage = (one, two) => {
   toastr.error(one, two);
}

export const warningMessage = (one, two) => {
   toastr.error(one, two);
}

export const infoMessage = (one, two) => {
   toastr.info(one, two);
}
