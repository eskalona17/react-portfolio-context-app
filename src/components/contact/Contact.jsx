import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react"


const Contact = () => {
    const formRef = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                +1 23 45 6789
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                test@test.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                test 1, Ny
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Assumenda fugit quae perferendis, possimus sequi error! 
                            Praesentium neque temporibus, ad eum, debitis itaque tenetur 
                            iure molestias distinctio illo laudantium sequi vero?
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Subject" name="user_subject"/>
                            <input type="text" placeholder="Email" name="user_email"/>
                            <textarea rows="5" placeholder="Message" name="message"></textarea>
                                <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact
