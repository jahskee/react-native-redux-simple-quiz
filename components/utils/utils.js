/* jshint esversion: 6 */
export const addKeys = (val, key) => ({ key: "" + key, ...val });

export function escapeUnicode(){

    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };
  
    return function() {
       return this.replaceAll('&quot;','\"')
                    .replaceAll('&epsilon;','ϵ')
                    .replaceAll('&Phi;','ϕ')
                    .replaceAll('&ocirc;','Û')
                    .replaceAll('&Aring','Å')
                    .replaceAll('&#039;', '\'');       
    }    
  }
  