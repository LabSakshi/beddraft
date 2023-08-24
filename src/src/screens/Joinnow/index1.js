import { useState } from "react";
import "./Join-Now.css";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData } from "../../Utility/API";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEyeInvisible, AiFillEyeInvisible } from "react-icons/ai";
import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
const Joinnow = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [passwordShow, setPasswordShow] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoadinig] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        let data = {
            login: userName,
            email: email,
            passwd: password,
        };
        let url = `${endPoints.api.SIGNUP}`;
        setIsLoadinig(true);
        await addData(url, data)
            .then((response) => {
                setIsLoadinig(false);
                if (response.data.status === "success") {
                    setMessage("Succcess");
                    SuccesToast("User SignUp Created Successfully")
                    setTimeout(() => {
                        navigate('/login')
                    }, 6000);
                } else {
                    setMessage(response.data.message);
                    ErrorToast(response.data.message);
                }
            })
            .catch((error) => {
                setIsLoadinig(false);
                ErrorToast('Some Thing Went Wrong Please try again')
                console.error(error);
            });

    };
    return (
        <div>
            <section className="login-page-section">
                <Toaster />
                {isLoading && <Loader spinner={true} visible={isLoading} />}
                <div className="login-form-div">
                    <Form
                        className="login-form"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <h2 className="mb-4">Create an Account</h2>
                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Control
                                required
                                placeholder="Username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter valid userName
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="EMAIL">
                            <Form.Control
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter valid email
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 password-box" controlId="PASSWORD">
                            <Form.Control
                                required
                                placeholder="Password"
                                type={passwordShow ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div
                                className="show-icon"
                                onClick={() => {
                                    setPasswordShow(!passwordShow);
                                }}
                            >
                                <AiFillEyeInvisible />
                            </div>
                            <Form.Control.Feedback type="invalid">
                                Please enter password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="login-btn-last  mt-5">
                            <Button
                                className="login-btn-form"
                                variant="primary"
                                type="submit"
                            >
                                Join Now
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        </div>
    );
};

export default Joinnow;
