// studygroup/client/src/components/groups/GroupFilter.js
import React from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

const GroupFilter = () => {
  return (
    <aside className="sidebar">
      <h3 className="section-title">그룹 필터</h3>
      <InputField
        id="search-group"
        type="text"
        label="그룹명/태그 검색"
        placeholder="그룹명 또는 태그 입력"
      />
      <div className="form-group">
        <label htmlFor="category">카테고리</label>
        <select id="category">
          <option value="">전체</option>
          <option value="자격증">자격증</option>
          <option value="어학">어학</option>
          <option value="개발">개발</option>
          <option value="공모전">공모전</option>
          <option value="취미">취미</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="status">모집 상태</label>
        <select id="status">
          <option value="">전체</option>
          <option value="모집중">모집중</option>
          <option value="모집완료">모집완료</option>
        </select>
      </div>
      <Button variant="primary" style={{ width: "100%", marginBottom: "15px" }}>
        필터 적용
      </Button>
      <Button variant="secondary" style={{ width: "100%" }} icon="plus">
        새 그룹 만들기
      </Button>
    </aside>
  );
};

export default GroupFilter;
