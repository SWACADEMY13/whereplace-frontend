<div>
    <div className={classes.appContent}>
        <input 
        value={typeof(fileFile2) === 'string' ? fileFile2 : fileFile2.name}
            disabled
            type='text'
            className={classes.appContentInput} 
            onChange={ (e) => {setFile2(e.target.value)}}
        />
    </div>
    <div className={classes.fileDiv} >
        <input 
            type="file" 
            accept=".gif, .jpg, .jpeg, .png, .pdf"
            style={{ display: "none" }} 
            ref={imageInput2}
            onChange={ (e) => {setFile2(e.target.files[0])}}
        />
        <button 
            onClick={onCickImageUpload2}
            className={classes.fileInput}                      
        >
        파일선택2
        </button>
    </div>
</div>