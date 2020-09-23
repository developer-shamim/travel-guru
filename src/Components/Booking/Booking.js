import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, useHistory } from 'react-router-dom';
import './Booking.css'
import Destination from '../Destination/Destination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const Booking = () => {
  const history = useHistory();
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

// const handleSubmit = () = {
//   history.push("/hotels/{place})
// }


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    const classes = useStyles();
    return (
      
        <div className="bg-booking">
        
             <div className="booking-area">
                        
              <form className={classes.root} noValidate autoComplete="off">
                <level for="formGroupExampleInput" >Origin</level>
                <div>
                <TextField
                  id="filled-full-width"
                  
                  style={{ margin: 8 }}
                  placeholder="From"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                </div>
                
                <br/>
                <level>Destination</level>
                <div>
                <TextField    
                  id="filled-full-width"

                  style={{ margin: 8 }}
                  placeholder="To"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                </div>
              
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End Data"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End Data"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

      </Grid>
    </MuiPickersUtilsProvider>
                            
                            <br/>
                            <div>
                              <Link to={`/login`}> <button type="submit" className="btn-warning booking  "> Start Booking</button> </Link>
                            </div>
                        </form>
                    </div>

        </div>
       
    );
};

export default Booking;