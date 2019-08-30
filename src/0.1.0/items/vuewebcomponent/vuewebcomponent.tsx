import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { I$outputname$, $outputname$Data } from './I$outputname$';
import { $outputname$Styles } from './$outputname$.css';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance, I$outputname$ {

    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from $outputname$!' } }) data?: $outputname$Data
    @Prop() styles?: typeof $outputname$Styles;

    private classes = StyleFlow.use($outputname$Styles);

    created() {
        if (this.styles) {
            this.classes = StyleFlow.use($outputname$Styles, this.styles);
        }
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.classes.container}>
                <div>{this.data.title}</div>
                {this.required ? <div>Im required</div> : null}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});