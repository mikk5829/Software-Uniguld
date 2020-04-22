export interface Subject {
  id: number;
  name: string;
  courseNumber: string;
  description: string;
  helperPrograms?: Array<HelperPrograms>;
}
interface HelperPrograms {
  title: string;
  description: string;
}
