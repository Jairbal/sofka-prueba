import { FormControl } from "@angular/forms";

export function dateValidator(control: FormControl): { isValidDate: boolean } | null {
    const date = new Date(control.value);
    const today = new Date();

    if (date > today) {
        return { isValidDate: true };
    }
    return null;
}