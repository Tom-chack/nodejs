document.addEventListener('click', (e)=>{
        
    if(e.target.tagName == 'A' && e.target.dataset.id){

        let articleId = e.target.dataset.id;
        e.preventDefault();
    
        if( articleId ){
            let article = {
                _id: articleId
            };
            fetch('/admin/delete/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            })
            .then( res => res.json() )
            .then( res => {
                let {error, id} = res;
                if(error){
                    alert(error.message);
                } else {
                    let articleRow = document.getElementById('article_' + id);
                    articleRow.remove();
                }
            });
    
        }
    }
    
    
});