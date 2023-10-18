import "../Styles/Charts.css"
import { Chart as ChartJS, ArcElement, Tooltip, BarElement, CategoryScale, LinearScale } from "chart.js"
import { Doughnut, Bar } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, BarElement, CategoryScale, LinearScale)

function Charts() {
    const data = {
        datasets: [{
            label: 'New Customers',
            data: [20, 45],
            backgroundColor: ["#ff4e72", "#8400ff"],
            borderColor: ["#ff4e72", "#8400ff"],
            borderWidth: 0,
            circumference: 234
        }]
    }

    // const options = {
    //     responsive: true,
    //     maintainAspectRatio: true
    // }

    const backgroundCircle = {
        id: "backgroundCircle",
        beforeDatasetsDraw(chart, args, pluginsOptions) {
            const { ctx } = chart; //canvasPath
            ctx.save() // to draw the circle

            // console.log(chart.getDatasetMeta(0))
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius + 10;
            const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius - 15;
            const angle = Math.PI / 180; //Conversion of radian to angle
            const width = outerRadius - innerRadius;

            ctx.beginPath();
            ctx.lineWidth = width
            ctx.strokeStyle = "rgba(0, 0, 0, 0.05)"
            // ctx.arc(xCoor, yCoor, outerRadius, startangle, endangle, counterClockwise)
            ctx.arc(xCoor, yCoor, outerRadius - width / 2, 235, angle * 360, false)
            ctx.stroke()
        }
    }

    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart, args, pluginsOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bolder 15px sans-serif';
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${data.datasets[0].data[0] + data.datasets[0].data[1]}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y - 10)

            ctx.font = 'bolder 12px sans-serif';
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            ctx.fillText("Total New", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + 5)

            ctx.font = 'bolder 12px sans-serif';
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            ctx.fillText("Customers", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + 20)

        }
    }

    const sliceThickness = {
        id: "sliceThickness",
        beforeDraw(chart, plugins) {
            // console.log(chart.chartArea.width);
            // console.log(chart.getDatasetMeta(0).data[1].innerRadius)
            // console.log(chart.getDatasetMeta(0).data[1].outerRadius)

            let sliceThicknessPixel = [90, 84]
            sliceThicknessPixel.forEach((thickness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = thickness
            })

            let sliceThicknessInner = [47, 52]
            sliceThicknessInner.forEach((thickness, index) => {
                chart.getDatasetMeta(0).data[index].innerRadius = thickness
            })

        }
    }


    //BarChart
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [4, 2, 5, 6, 8, 9, 3, 6, 3, 7, 5, 6],
                backgroundColor: ["#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#8400ff", "#0000000d", "#0000000d", "#0000000d", "#0000000d",],
                borderColor: ["#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#0000000d", "#8400ff", "#0000000d", "#0000000d", "#0000000d", "#0000000d",],
                borderRadius: 8
            }
        ]
    }

    const barOptions = {
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    display: false,
                    drawTicks: false
                }
            },
            y: {
                display: false,               
                ticks:{
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    display: false,
                    drawTicks: false
                }
            }
        }, 
        maintainAspectRatio: false
    }
    return (
        <main id="charts">
            <section className="barChart">
                <div className="barHead">
                    <div>
                        <h4 className="fs-5 fw-bold">Overview</h4>
                        <p className="boxHeading">Monthly Earning</p>
                    </div>

                    <select className="form-select form-select-sm mb-3 productFilter" aria-label="Large select example">
                        <option defaultValue>Period</option>
                        <option value="1">Monthly</option>
                        <option value="3">Quartely</option>
                        <option value="6">Half-yearly</option>
                    </select>
                </div>
                <div style={{height:"300px"}}>
                    <Bar data={barData} options={barOptions}></Bar>
                </div>
            </section>
            <section className="doughChart">
                <div className="doughHead">
                    <h4 className="fs-5 fw-bold">Customers</h4>
                    <p className="boxHeading">Customers that buy products</p>
                </div>
                <div style={{height:"300px"}}>
                    <Doughnut data={data} options={{
                        maintainAspectRatio: false,
                    }} plugins={[backgroundCircle, textCenter, sliceThickness]}></Doughnut>
                </div>
            </section>
        </main>
    )
}

export default Charts