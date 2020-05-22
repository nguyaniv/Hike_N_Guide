import trailService from '../../services/trail.service'


export function loadTrails() {
    return async dispatch => {

        try {
            const trails = await trailService.query()            
            dispatch(setTrails(trails));
      
          } catch (err) {
            console.log('ReviewActions: err in loadTrails', err);
          }
    }
}



function setTrails(trails) {
    
    return {
      type: 'SET_TRAILS',
      trails
    };
  }
  