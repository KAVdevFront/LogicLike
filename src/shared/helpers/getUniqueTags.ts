import { ICourse } from "../types";

export const getUniqueTags = (courses:ICourse[])=>{
    const tags = courses.reduce<string[]>((acc, course)=>{
        return acc = [...acc, ...course.tags]
    }, [])

    

    const uniqueTags:string[] =  Array.from(new Set(tags)) 

    const res = uniqueTags.reduce((acc:Record<string, ICourse[]>, tag:string) =>{
        acc[tag] = courses.filter(course=>course.tags.includes(tag))  
        return acc
  }, {})

  return {uniqueTags:['Все темы', ...uniqueTags], courses:{...res, 'Все темы':courses}}
}


