export class Deep {
  constructor(
    public id: number = null,
    public userName: string = "",
    public description: string = "",
    public answer: any = [],
    public answer_count: number = 0,
    public likes: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}

}

export interface Answer {
    content: string;
    author: string;
    details: string;
}
