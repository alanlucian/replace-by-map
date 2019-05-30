
function Replacer (){
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    this.exec = (string, map, prefix, suffix = null)=>{

        suffix = suffix || prefix;
        map.forEach((value,key) => {
            var eregString = escapeRegExp( `${prefix}${key}${suffix}`);
            var ereg = new RegExp(`(${eregString})`,'gm');
            string = string.replace( ereg , value);
        });
        return string;
    }
}

module.exports = new Replacer();