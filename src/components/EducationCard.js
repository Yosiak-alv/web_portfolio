import { Col} from "react-bootstrap";

export const EducationCard = ({title,description,imgUrl,alt}) =>{
    return (
        <Col size={12} sm={6} md={4} >
            <div className="educa-imgbx">
                <img src={imgUrl} alt={alt}/>
                <div className="educa-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}