import React from 'react'

const WorkFlow = () => {
  return (
    <section className='p-[20px] max-lg:pr-[15px] max-lg:pl-[15px] pt-[50px] pb-[50px] relative bg-workflow bg-center bg-cover no-repeat min-h-screen'>
      <div className="text-center ">
        <h1 className='heading-workflow pb-10'>OUR CUSTOMIZED <br />
        <span className='text-gradient'>WORK FLOW</span>
        </h1>
      </div>

      <div id='workflow-group-container' className="flex text-white flex-col items-center gap-10">
        <div className="workflow-group lg:pr-[70px]">
            <div id='title' className="workflow-group-title">
                <span className='text-sm'>01</span>
                <p className='text-5xl max-lg:text-4xl'>Understand</p>
            </div>
            <div id='content' className="workflow-group-content">
                <p className=''>It's important to identify your requirements first. Not knowing your business well prevents us from developing an effective approach. Adapattion startegy covers an extensive landscape. We have to come up with an approach that works for your company.</p>
            </div>
        </div>

        <div className="workflow-group lg:pl-[80px]">
            <div id='title' className="workflow-group-title">
                <span className='text-sm'>02</span>
                <p className=' max-lg:text-4xl text-5xl tracking-wide'>Plan</p>
            </div>
            <div id='content' className="workflow-group-content">
                <p>We begin stargegy planning after we grasp your needs. Marketing isn't ignored. SEO, PPC and influencers are accessed for fastesst outcomes. We prepare for 3-4 months so we can test all our practical stategies and acquire better outcomes.</p>
            </div>
        </div>

        <div  className="workflow-group max-md:flex-wrap-reverse lg:pr-[80px]">
        <div id='content' className="workflow-group-content">
                <p>We implemment our plan now. To succeed. we'll mamange content, production, development, ads, and campaign optimization. We design the best team for yoir project using diverse perspective from our creative base. We curate unique, high qualty content for conversion on key socia networks. .</p>
            </div>


            <div id='title' className="workflow-group-title">
                <span className='text-sm'>03</span>
                <p className='text-5xl max-lg:text-4xl'>Execution</p>
            </div>
        </div>

        <div  className="workflow-group max-md:flex-wrap-reverse lg:pl-[80px]">
        <div id='content' className="workflow-group-content">
                <p>We manage communitu, monitor user and audience rowth focysing on the larger pictyure. We evaluate our performance, address critical learning points and identify ways to magnify your brand and accomplish your strategic goals.</p>
            </div>

            <div id='title' className="workflow-group-title">
                <span className='max-lg:text-xs text-sm'>04</span>
                <p className='text-5xl max-lg:text-4xl'>Result</p>
            </div>
        </div>
        
      </div>

     
    </section>
  )
}

export default WorkFlow
