/*
Scorpions
*/

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { blueGray, blueGrey} from "@material-ui/core/colors"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




const BannerSlider = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();

    const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
      return (
        <div>
          
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {props.Images.map((step, index) => (
              <div key={step.label} style={{width:"100%", height: "150px", backgroundColor: blueGrey[400]}}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img style={{width: "100%"}} src={step.imgPath} alt="" />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          
        
        </div>
      ); 
}

/*
 * Exporting default BannerSlider
 */

export default BannerSlider

