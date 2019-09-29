import React from 'react'
import { Chart } from "react-google-charts";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import cyan from '@material-ui/core/colors/cyan'

const styles = {
    typo: {
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    typo2: {
        color: 'white',
        paddingTop:'30px'
    }
}
class AdminDashboard extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper square={false} style={{backgroundColor: cyan[700], height: '100px'}}>
                            <Typography variant="h5" component="h5" align='center' style={styles.typo2}>
                                Average order per month: 100
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper square={false} style={{backgroundColor: red[400], height: '100px'}}>
                            <Typography variant="h5" component="h5" align='center' style={styles.typo2}>
                                Number of categories: 10
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={styles.statistic}>
                        <Paper square={false} style={{backgroundColor: orange[800], height: '100px'}}>
                            <Typography variant="h5" component="h5" align='center' style={styles.typo2}>
                                Number of customer: 1000
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                    <Paper square={false}>
                        <Typography variant="h5" component="h5" style={styles.typo}>
                            Revenue
                        </Typography>
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="AreaChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['x', 'revenue'],
                                ["January", 100],
                                ["February", 150],
                                ["March", 220],
                                ["April", 180],
                                ["May", 200],
                                ["June", 270],
                                ["July", 280],
                                ["August", 300],
                            ]}
                            options={{
                                hAxis: {
                                title: 'Time',
                                },
                                vAxis: {
                                title: 'Million VND',
                                },
                                series: {
                                1: { curveType: 'function' },
                                },
                            }}
                            rootProps={{ 'data-testid': '2' }}
                            />
                    </Paper>
                        
                    </Grid>
                    <Grid item xs={5}>
                        <Paper square = {false}>
                            <Typography variant="h5" component="h5" style={styles.typo}>
                                Trending products
                            </Typography>
                            <Chart
                            width={'400px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Product', 'Sale number'],
                                ['Banana', 100],
                                ['Apple', 80],
                                ['Orange', 85],
                                ['Grape', 50],
                            ]}
                            options={{
                                title: 'Trending products',
                                // Just add this option
                                pieHole: 0.3,
                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AdminDashboard