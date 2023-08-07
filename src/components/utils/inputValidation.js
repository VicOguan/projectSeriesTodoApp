export const status_validation = {
    name: 'status',
    label: 'Status',
    type: 'string',
    id: 'status',
placeholder: 'ACTIVE, COMPLETED, INCOMPLETE',
validation:{
    required: {
        value: true,
        message: 'Please enter a valid status',
    },
    pattern: {
        value: 'ACTIVE, COMPLETED, INCOMPLETE',
        message: 'Please enter a valid status',
    },
},
}