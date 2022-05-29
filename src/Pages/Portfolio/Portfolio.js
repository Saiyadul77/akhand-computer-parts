import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='ml-20 my-10 font-bold'>
                <h1 className='text-3xl text-primary font-bold text-center'>My Portfolio</h1>
                <h1>Name: Md. Saiyadul Amin Akhand</h1>
                <h2 className='mb-5'>Email: saiyadul77@gmail.com</h2>
                <h2 className='mb-3'>Educational Background: </h2>


                <div>
                    Exam Title : Masters of Business Administration (MBA) <br />
                    Major : Human Resource Management (HRM)<br />
                    Institute Name : Prime University, Mirpur-1, Dhaka<br />
                    Result : CGPA 3.27 out of 4.00<br />
                    Passing Year : 2019<br />
                    Duration : 16 months<br /><br />
                </div>

                <div>
                    Exam Title : Bachelor of Science (B. Sc) <br />
                    Major : Computer Science & Engineering (CSE) <br />
                    Institute Name : Prime University, Mirpur-1, Dhaka <br />
                    Result : CGPA 3.62 out of 4.00 <br />
                    Passing Year : 2014 <br />
                    Duration : 4 years <br /> <br />
                </div>
                <div>
                    <h1>List of Technology</h1>
                    <li>HTML, CSS, JS, REACT, BOOTSTRAP, TAILWIND, DAISY, MONGODB</li>
                </div>

            </div>
            <div className='ml-20 my-10'>
                <div className='my-5 text-3xl'>Project Link</div>
                <a className='text-primary text-lg' href="https://welcome-akhand-furniture.netlify.app/" target="_blank">1.Akhand Furniture</a> <br />
                <a className='text-primary text-lg' href=" https://akhand-baby-shop.netlify.app/" target="_blank">2.Akhand Baby Shop</a> <br />
                <a className='text-primary text-lg' href=" https://science-tutor-5e5e1.web.app/" target="_blank">3.Science Tutor</a>
            </div>
        </div>
    );
};

export default Portfolio;