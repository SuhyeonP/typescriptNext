export async function paging(curPage:number,totalRowCount:number){
    let page_size:number=10;//페이지당 게시물수
    let page_list_size:number=5;//페이지 넘어갈수있는개수 1~5
    let no:number=0;//limit변수 db에서 가져올 게시물 수

    curPage=Number(curPage)//인자로 받은 현재 페이지번호

    if(curPage<=0){
        no=0;
        curPage=1;
    }else{
        no=(curPage-1)*page_size;
    }

    if(totalRowCount<0){
        totalRowCount=0;
    }
    let totalPage=Math.ceil(totalRowCount/page_size);
    if(totalPage<curPage){
        no=0;
        curPage=1//totalPage보다 큰 curPage가 호출되면,에러 발생시킴
    }
    let startPage=((curPage)*page_list_size)+1;
    let endPage=(startPage+page_list_size)-1;

    let result={
        "curPage": curPage,
        "page_list_size": page_list_size,
        "page_size": page_size,
        "totalPage": totalPage,
        "startPage": startPage,
        "endPage": endPage,
        "no": no
    }
    return result;
}