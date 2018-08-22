import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import PropType from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 500)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <View style={{ flex: 1 , padding: 10}}>
                <Text style={{ color: 'blue', fontSize: 18 }}>{value}</Text>
                <View style={{ flex: .1, margin: 3 }}>
                    <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: 'blue', padding: 10 }} onPress={onIncrement}>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .1 }}>
                    <TouchableOpacity onPress={onDecrement} style={{ flex: .3, width: 200, height: 50, backgroundColor: 'blue', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .1 }}>
                    <TouchableOpacity onPress={this.incrementIfOdd} style={{ flex: .3, width: 200, height: 50, backgroundColor: 'blue', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Increment if Odd</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .1 }}>
                    <TouchableOpacity onPress={this.incrementAsync} style={{ flex: .3, width: 200, height: 50, backgroundColor: 'blue', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Increment Async</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



Counter.PropType = {
    value: PropType.number.isRequired,
    onIncrement: PropType.func.isRequired,
    onDecrement: PropType.func.isRequired
}

const mapStateToProps = (state) => ({
    value: state,
})

export default connect(mapStateToProps)(Counter);