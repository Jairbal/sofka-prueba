import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { dateValidator } from '../../validators/date.validator';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css'
})
export class AddProductFormComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', {
        validators: [
          Validators.required, Validators.minLength(3), Validators.maxLength(10)
        ],
        asyncValidators: [this.productService.isValidId()],
        updateOn: 'blur'
      }],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      logo: ['', Validators.required],
      date_release: ['', [Validators.required, dateValidator]],
      date_revision: ['', [Validators.required, dateValidator]]
    })
  }

  isInputError (input: AbstractControl): boolean {
    return Boolean(input.touched && input.errors);
  }

  sendProduct(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productService.submitProduct(formData).subscribe(response => {
        //todo: agregar mensaje de guardado con exito
      });

    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
