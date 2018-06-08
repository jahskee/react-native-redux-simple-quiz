export const addKeys = (val, key) => ({ key: "" + key, ...val });

export function escapeUnicode(){

    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };
  
    return function() {
      xescape = this.replaceAll('&quot;','\"')
                    .replaceAll('&epsilon;','ϵ')
                    .replaceAll('&Phi;','ϕ')
                    .replaceAll('&#039;', '\'');                
      console.log(JSON.stringify(xescape));  
      return xescape;
    }
    
  }
  