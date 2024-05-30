import { memo } from "react"
import { ICourse } from "../../shared/types"
import CoursesCard from "./CourseCard"
import cls from './Courses.module.scss'

interface ICoursesProps {
    courses:ICourse[]

}

const Courses = memo(({courses}:ICoursesProps)=>{
    
    return (
        <div className={cls.courses}>
            {courses.map(course=>(
                <CoursesCard key={course.id} course={course}/>
            ))}
        </div>
        
    )
})

export default Courses