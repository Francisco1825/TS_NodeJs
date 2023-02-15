import {request, response} from 'express'
import CreateCourseService from './CreateCourseService'


export function createCourse(req: Request, res: Response){

CreateCourseService.execute("NodeJs", 10, "Dani")


return response.send()
}