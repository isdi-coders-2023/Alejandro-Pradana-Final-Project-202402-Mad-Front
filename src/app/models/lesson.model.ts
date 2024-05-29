

export type Lesson = LessonNoId & WithId;

export type LessonNoId = {
  title: string,
  category: Category,
  description: string,
  content: string,
  userId: string
}

type WithId = {
  id : string
}

export type Category = 'Humanities' | 'Science' | 'Sports' | 'Art' | 'Technology' | 'Social_Science';
