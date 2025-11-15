// Дано тип Employee, що містить опис (перелік) полів, що можуть бути у працівника (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність).

export type Employee = {
  name: string;
  birthYear: number;
  salary: number;
  experience: number;
  department: string;
  address: string;
  specialization: string;
};

// Потім на основі цього типу  створи новий тип даних, що буде містити тільки ім'я, підрозділ та заробітну плату)

export type EmployeeDataExtraction = Pick<Employee, "name" | "department" | "salary">