import React from 'react'
import { Link } from 'react-router'
import Button2 from '../components/Button2'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'

const ErrorPages: React.FC = () => {
  return (
    <div className='container ' >
        <div className='mt-20'>
          <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-[14px] ">
                  <BreadcrumbLink >
                  <Link to={"/"}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink >
                  <Link to={"*"}>404 Error</Link>
                  
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>

        
     

      <div className=' flex flex-col items-center justify-center ' >
     <h1 className=' text-[110px] font-inter font-medium tracking-[3px] leading-[115px] mt-[140px]  ' > 404 Not Found </h1>
     <p className=' font-poppins font-normal text-[16px] mt-10 leading-6 mb-20 ' > Your visited page not found. You may go home page. </p>
     
     <Link to={"/"} >
     <Button2>Back to home page</Button2>
     </Link>
      </div>
      
    </div>
  )
}

export default ErrorPages
