let formData = new FormData();
let ip = ''

// try {
//   const response = await axios.get('https://api.ipify.org?format=json');
//   ip = response.data.ip;
// }catch (error) {
//   console.error(error);
//   return
// }

formData.append('boardType', location.state.cateType)
formData.append('wr_reply', location.state.wrReply || '')
formData.append('wr_option', wrOption)
formData.append('wr_subject', wrSubject)
formData.append('wr_content', wrContent)
formData.append('wr_link1', wrLink1)
formData.append('mb_id', mbId)
formData.append('wr_name', mbName)
formData.append('wr_email', mbEmail)
formData.append('wr_num', location.state.wrNum || 0)
formData.append('wr_ip', ip)
formData.append('file1', fileFile1)
formData.append('file2', fileFile2)

try {
    const res = await axios.post(
                        '/api/board/boardWrite/',
                        formData, 
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
    )

    if(!res.data.success) {
        setDialog('작성을 실패하였습니다.')
        return
    }

    navigate("/BoardList", {
        state: { cateType: location.state.cateType }
    });

} catch(e) {
    console.log(e)
}