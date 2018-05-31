
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../store/buycar/actionCreator'

export default connect(state => state.buycar, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})
