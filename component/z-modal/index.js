Component({
    options: {
        multipleSlots: true
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        closeabled: {
            type: Boolean,
            value: true
        },
        width: {
            type: String,
            value: 550
        },
        radius: {
            type: String,
            value: 2
        },
        mask: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['m-class', 'c-class'],
    data: {

    },
    methods: {
        handleClose(ev) {
            let { target } = ev.currentTarget.dataset, { mask } = this.data

            // 如果点击遮罩层，并 mask 为 false，return 之
            if (target === 'mask' && !mask) return

            this.setData({
                visible: false
            })

            this.triggerEvent('closeListener')
        }
    },
    ready() {

    },
    detached() {

    }
})