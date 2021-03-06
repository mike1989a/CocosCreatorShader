const ShaderComponent = require('ShaderComponent');
cc.Class({
    extends: ShaderComponent,
    editor: CC_EDITOR && {
        menu: 'Shader/FlickOverComponent',
        disallowMultiple: true,
        executeInEditMode: false,
        requireComponent: cc.RenderComponent,
    },
    properties: {
        tex: {
            default: null,
            type: cc.Texture2D
        },

        range: {
            default: 0,
            type: 'Float',
            range: [0, 1, 0.1],
            slide: true,
            notify: function () {
                this._updateRange();
            }
        },
    },
    onLoad() {
        this.Material = require('FlickOverMaterial');
        window.aaa = this;
    },

    onEnable() {
        ShaderComponent.prototype.onEnable.call(this);
        this.material.targetTex = this.tex;
        this.material.range = this.range;
    },

    _updateRange() {
        if (!CC_EDITOR) {
            this.material.range = this.range;
        }
    }
});
