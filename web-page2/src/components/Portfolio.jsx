import React from 'react'

function Portfolio() {
  return (
    <div>
        <div className="section portfolio" id="portfolio">
            <div className="container main">
                <div className="heading "><h2>Latest Work</h2></div>
                <p id='project-data'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laborum totam aut tenetur illum cupiditate. Quidem cumque veniam assumenda temporibus aliquam nam enim pariatur? Saepe consequatur omnis aperiam libero et.</p>
            </div>
            <div className="btns">
                <div className="btn p-btn" data-btn-num='1'>Projects</div>
                <div className="btn p-btn" data-btn-num='2'>Certificates</div>
                <div className="btn p-btn" data-btn-num='3'>Acheivements</div>
            </div>
            <div className="main grid grid-three-columns port-img">
                <div className="image-overlay p-btn--1">
                    <img className='imge' src="https://thumbs.dreamstime.com/b/scrum-agile-development-methodology-programming-application-design-technology-concept-virtual-screen-204148288.jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 1</div>
                </div>
                
                <div className="image-overlay p-btn--2">
                    <img className='imge' src="https://images.pexels.com/photos/34140/pexels-photo.jpg?cs=srgb&dl=blogging-business-coding-34140.jpg&fm=jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 2</div>
                </div>
                <div className="image-overlay p-btn--3">
                    <img className='imge' src="https://www.ishir.com/wp-content/uploads/2018/03/new-2.jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 3</div>
                </div>
                
            </div>
            <div className="main grid grid-three-columns port-img">
                <div className="image-overlay p-btn--1">
                    <img className='imge' src="https://thumbs.dreamstime.com/b/scrum-agile-development-methodology-programming-application-design-technology-concept-virtual-screen-204148288.jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 1</div>
                </div>
                
                <div className="image-overlay p-btn--2">
                    <img className='imge' src="https://images.pexels.com/photos/34140/pexels-photo.jpg?cs=srgb&dl=blogging-business-coding-34140.jpg&fm=jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 2</div>
                </div>
                <div className="image-overlay p-btn--3">
                    <img className='imge' src="https://www.ishir.com/wp-content/uploads/2018/03/new-2.jpg" alt="" />
                    {/* <p className=" det"><h2>Project</h2></p> */}
                    <div className="mn ">Project 3</div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Portfolio