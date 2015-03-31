/**
 * Created by 欢 on 2015/3/31.
 */


var repoBase = 'https://api.github.com/repos/itoshikiNozomu/itoshikiNozomu.github.io'
var api = {
    refs: repoBase + '/git/refs',
    tree: repoBase + '/git/trees'
}
function findInArray(arr, key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i];
        }
    }
}
function getPosts() {
    return $
        .get(api.refs)
        .then(function (refs) {

            return findInArray(refs, 'ref', 'refs/heads/master')

        })
        .then(function (ref) {
            return $.get(api.tree+'/'+ref.object.sha)
        })
        .then(function(rootTree){
            return $.get(findInArray(rootTree.tree,'path','posts').url)
        })
    //return $.get(api.tree+'/'+masterSha).then(function(rootTree){
    //
    //})

}

getPosts().then(function(postsTree){
    console.log(postsTree)
})