import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { dateValidator } from '../../validators/date.validator';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
import { dateFormat } from '../../../utils/date.util';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css'
})
export class AddProductFormComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private messageService: MessageService, private router: Router) {}

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
      date_revision: [{ value: '', disabled: true }]
    })
  }

  isInputError (input: AbstractControl): boolean {
    return Boolean(input.touched && input.errors);
  }

  onBlurDateRelease(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const date = new Date(value);
    const year = date.getFullYear();
    const date_revision = date.setFullYear(year+1)
    const formatDate = dateFormat(date_revision);
    this.productForm.get('date_revision')?.setValue(formatDate);
  }

  sendProduct(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productService.submitProduct(formData).subscribe({
        next: (Response) => {
          this.messageService.onSuccess("Producto creado correctamente!")
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.messageService.onError(error.error.message)
        }
      });

    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
