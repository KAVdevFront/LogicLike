import { memo, useCallback, useEffect, useState } from "react"
import { ICourse } from "../../shared/types"
import cls from './CoursesPage.module.scss'

import Courses from "../../components/courses/Courses"
import TagsCard from "../../components/tagsCard/TagsCard"
import { getUniqueTags } from "../../shared/helpers/getUniqueTags"

const CoursesPage =memo(()=>{
    const [courses, setCourses] = useState <Record<string, ICourse[]>>({})
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [activeTag, setActiveTag] = useState<string>('Все темы')
    const [uniqueTags, setUniqueTags] = useState<string[]>([])

    const getCourses = async ()=>{
      try {
        const res = await fetch('https://logiclike.com/docs/courses.json')
        const result = await res.json()
        const {courses,uniqueTags} = getUniqueTags(result)
       
        setCourses(courses)
        setUniqueTags(uniqueTags)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setIsLoading(false) 
      }
    }

    const handleChangeActiveTag = useCallback((tag:string)=>{
      setActiveTag(tag)
    },[])

    useEffect(()=>{
      getCourses()
    },[])
  
    if(isLoading){
      return (
        <div >
          ...Загрузка
        </div>
      )
    }
  
    if(isError){
      return (
        <div >
          Ошибка получения курсов
        </div>
      )
    }


    return (
        <div className={cls.coursesPage}>
              <TagsCard  activeTag={activeTag} tags={uniqueTags} handleChangeActiveTag={handleChangeActiveTag}/>
              <Courses courses={courses[activeTag]}/>
        </div>
    )
})

export default CoursesPage