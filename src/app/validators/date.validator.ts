import { FormControl } from "@angular/forms";

export function dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();

    if (selectedDate > today) {
        return { futureDate: true };
    }
    return null;
}