import {Pipe} from "@angular/core";

@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe {
    transform(value, args) {
        if (!args) {
            return value;
        } else if (args) {
            return value.filter(item => {
                for (let key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String ) &&
                        (item[key].trim().toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) && (key === "title")) {
                        return true;
                    }
                }
            });
        }
    }
}
