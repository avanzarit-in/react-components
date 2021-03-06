import React from 'react';
import { DragSource } from 'react-dnd';
import { Card as Cards, Icon } from 'semantic-ui-react';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    CARD: 'card'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = { id: props.id };
         console.log("begin dragging");
        return item;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            console.log("complete dragging");
            return;
        }

        // When dropped on a compatible target, do something
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

function Card(props) {
    // Your component receives its own props as usual
    const { id } = props;

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = props;

    return connectDragSource(
        <div>
            <Cards>

                <Cards.Content>
                    <Cards.Header>Matthew</Cards.Header>
                    <Cards.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Cards.Meta>
                    <Cards.Description>Matthew is a musician living in Nashville.</Cards.Description>
                </Cards.Content>
                <Cards.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
      </a>
                </Cards.Content>
            </Cards>
        </div>
    );
}

// Export the wrapped version
export default DragSource(Types.CARD, cardSource, collect)(Card);