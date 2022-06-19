import { Link } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";


export default function Product() {
    return (
        <div className="product">
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>اسم المدرس الكامل</label>
                        <input type="text" placeholder="سندس عيسى" />
                        <label>معلومات التواصل</label>
                        <input type="text" placeholder="sondos@gmail.com" />

                        <label>اسم الدائرة</label>
                        <select name="inStock" id="علم الحاسوب">
                        </select>
                        <label>رقم المكتب</label>
                        <input type="text" placeholder="145" />
                        <label>مكان المكتب</label>
                        <input type="text" placeholder="كلية الهندسة والتكنولوجيا" />
                        <Link to="/newproduct">
                        <button className="productAddButton">تحديث </button>
                        </Link>
                        </div>
                    {/* <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div> */}
                    
                </form>
            </div> 
            
        </div>
    );
}
