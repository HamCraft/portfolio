const services = [
    { id: '01', title: 'Web Design', description: 'Crafting visually stunning and user-friendly websites tailored to your brand\'s identity and goals.' },
    { id: '02', title: 'Machine Learning', description: 'Python Developer' },
    { id: '03', title: 'UX/UI Design', description: 'Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.' },
    { id: '04', title: 'Video Editing', description: 'Crafting high quality and engaging video on Capcut and Davinci Resolve' },
    { id: '05', title: 'Content Creation', description: 'Crafting engaging and relevant content, including blogs, videos, and graphics, to connect with your audience and enhance your brand story.' },
    { id: '06', title: 'Graphic Design', description: 'Crafting high quality thumbnails and other graphic designs on Canva' }
]

export const Services = () => {

    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col lg:flex-row ">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20 px-4">SERVICES</h2>
                </div>
                <div className="md:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start px-2">
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>      
        </section>
    )
}