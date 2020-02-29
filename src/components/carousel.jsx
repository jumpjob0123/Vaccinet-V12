import React ,{ Component } from "react";
import { Carousel } from "react-responsive-carousel"
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { CardImg } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import pic from './news.jpg';
import pic1 from './news1.jpg';
import pic2 from './news2.jpg';
import pic3 from './news3.jpg';
import pic4 from './news4.jpg';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    .test{
              width: 100%;
              background-size: cover;
              border: 1px ;
        }
`
const p = styled.div`
vertical-align: bottom;
`


class carousel extends Component {
    render() {
    var imgpreview =  <img href="Capture.png"/>
        return (

<Wrapper>
<link rel="stylesheet" href="carousel.css"/>
<h1>News</h1>

            <Carousel autoPlay>
                <div onClick={() => window.location.href='http://www.sikarin.com/content/detail/408/วิธีการป้องกัน-รับมือ-ไวรัสโคโรน่า'}>
                  <img src="http://www.sikarin.com/images/newsletter/cover/408.jpg" />
                  <p className="legend">วิธีการป้องกัน-รับมือ-ไวรัสโคโรน่า</p>
                </div>
                <div onClick={() => window.location.href='https://www.thairath.co.th/news/local/1525780'}>
                  <img src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZX95HRvjkU2CcC4seM2VydvAWClvo7dzNcmWXhI0zEjs6p1vR2W3.webp" />
                  <p className="legend">หมอเตือนระวัง ไข้หวัดใหญ่สายพันธุ์บี</p>
                </div>
                <div onClick={() => window.location.href='https://www.thairath.co.th/news/local/1531326'}>
                  <img src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZYADO8ky5xFhRhfvPVMtY6SWgcQUVyVctC6sTvO1kxteIjIgOhVS.webp" />
                  <p className="legend">สาธารณสุขสั่งคุมเข้ม “โรคไข้หวัดใหญ่”</p>
                </div>

            </Carousel>

            <div onClick={() => window.location.href='https://thestandard.co/coronavirus-timeline/?fbclid=IwAR0_tfHxjTwj1eoH4xHrOXiUtVoZCLP7YD23vleyeeLyXstD9uBYRBLgT70'}>
                <Card>

                    <CardContent>
                      <img className="test" src={pic} alt="Logo" />

                      <Typography gutterBottom variant="h5" component="h2">
                        สรุปไทม์ไลน์การแพร่เชื้อไวรัสโคโรน่า
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        นี่คือภาพรวมไทม์ไลน์ของการแพร่ระบาดของเชื้อไวรัสโคโรน่าสายพันธุ์ใหม่ 2019 นับตั้งแต่เกิดการแพร่ระบาด...
                      </Typography>
                    </CardContent>
                </Card>
            </div>

            <div onClick={() => window.location.href='https://thematter.co/brief/recap/recap-1581501602/100550?utm_source=LINE&utm_medium=Content%20Discovery&utm_campaign=LINE%20TODAY&fbclid=IwAR2anv6AYc8i7kxQBPleC9boQwewKsm2pYTv4UQkccQ4cgQ64jHM0Awum7Y'}>
                <Card>

                    <CardContent>
                      <img className="test" src={pic1} alt="Logo" />

                      <Typography gutterBottom variant="h5" component="h2">
                        เพราะอาจมีผู้ติดเชื้อโคโรนา จึงถูกปฏิเสธเข้าประเทศ
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        สถานการณ์การระบาดของเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ หรือที่เพิ่งได้ชื่อเรียกว่า COVID-19 ยังคงเป็นที่เฝ้าระวัง และป้องกัน...
                      </Typography>
                    </CardContent>
                </Card>
            </div>
            <div onClick={() => window.location.href='https://www.thairath.co.th/news/local/east/1769828?fbclid=IwAR3hD2ehWtYaS7OIEFOxFr9DJ7d2p6AQzOJZxbr_2yymNWCnk2DYfqRspyc'}>
                <Card>

                    <CardContent>
                      <img className="test" src={pic2} alt="Logo" />

                      <Typography gutterBottom variant="h5" component="h2">
                        ทร.ไทย เผยการทำความสะอาดรถรับส่ง 138 คนไทยกลับบ้าน ยันปลอดไวรัสโคโรนา
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        กองทัพเรือ เผยขั้นตอนมาตรการในการสั่งชุด คชรน.ล้างสารพิษ เชื้อโรค บนยานพาหนะรับส่งคนไทยกลับบ้าน...
                      </Typography>
                    </CardContent>
                </Card>
            </div>

            <div onClick={() => window.location.href='https://www.bangkokbiznews.com/news/detail/866031?fbclid=IwAR0014ebPBF4p9wyJDQeStUvbkt9cKQoKi4XIQPit6pouDsJxvJ395pzg20'}>
                <Card>

                    <CardContent>
                      <img className="test" src={pic3} alt="Logo" />

                      <Typography gutterBottom variant="h5" component="h2">
                        'ราชทัณฑ์' โต้คุกไทยไม่มี 'ไวรัสโคโรน่า' ระบาด
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        "กรมราชทัณฑ์" ร่อนเอกสารแจงตรวจสุภาพนักโทษอังกฤษก่อนส่งตัวเป็นผู้ร้ายข้ามแดน ผลตรวจสุขภาพแข็งแรง-ไม่มีอาการเจ็บป่วย...
                      </Typography>
                    </CardContent>
                </Card>
            </div>

            <div onClick={() => window.location.href='https://www.thairath.co.th/news/politic/1769768?fbclid=IwAR0FmUhhZI3HU9wtX6IqgCtzvvF-ulpB66skffPO8d31rdvmNiutUpPDvoE'}>
                <Card>

                    <CardContent>
                      <img className="test" src={pic4} alt="Logo" />

                      <Typography gutterBottom variant="h5" component="h2">
                        กรมอนามัย แนะ 10 สถานที่เสี่ยง หมั่นทำความสะอาด กันแพร่ ไวรัสโคโรนา
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        รองโฆษก รบ.เผย "กรมอนามัย" แนะ 10 สถานที่เสี่ยง หมั่นทำความสะอาด กันแพร่เชื้อโควิด-19 หรือไวรัสโคโรนา...
                      </Typography>
                    </CardContent>
                </Card>
            </div>
</Wrapper>
        )
    }
}

export default carousel







