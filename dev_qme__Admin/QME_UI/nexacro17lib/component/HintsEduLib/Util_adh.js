/**
*  @FileName 	Util.js 
*/

var pForm = nexacro.Form.prototype;
//	var pForm = this;

/**
 * @class 
 * @param 
 * @param 
 * @return
 */
pForm.gtrace = function(strTrc,strPos)
{
	// 주석 처리 여부가 기능에 영향을 주어서는 안된다.
	if ( pForm.gfn_isNull(strPos)				//strPos 없이 넘어 오면 무조건 찍는다.
// 					||	strPos == "Grid.xjs.gfn_setGrid"					// 그리드 세팅
//  				||	strPos == "Grid.xjs._getUniqueId"				// 그리드의 유니크 아이디 가져오기
//  				||	strPos == "Grid.xjs._getGridUserProperty"		//
//  				||	strPos == "Grid.xjs._gfnGridAddProp"			// userproperties , arrProp[i]값에 따라 sort-->objGrid.sort = 'true'--실행
//  				||	strPos == "Grid.xjs.gfn_grid_onheadclick"		// 그리드 헤드 클릭 (체크박스 : 전체선택 / 일반 : 정렬)
//  				||	strPos == "Grid.xjs._gfnHeadCheckSelectAll"		// 		-	체크박스 : 전체선택 / 전체해제)
// 					||	strPos == "Grid.xjs.gfn_grid_onrbuttondown"		// 그리드 우클릭 이벤트
//  				||	strPos == "Grid.xjs._gfnMakeGridPopupMenu"		// 우클릭 팝업메뉴
//					||	strPos == "Grid.xjs.gfn_popupmenu_onmenuclick"	// 우클릭 팝업메뉴--메뉴클릭시
//					||	strPos == "Grid.xjs._gfnGridFilter"				// 필터설정
					||	strPos == "PopupSalesOrder.xfdl.Form_onload"
	)
	{
		trace(strPos+"--------->"+strTrc);
	}
};
