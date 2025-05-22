import React from "react";
import Button from "../common/Button";
import InputField from "../common/InputField"; // InputField 임포트 (필요하다면 경로 확인)

const MaterialEditor = () => {
  return (
    <div
      className="problem-editor"
      style={{
        marginTop: "40px",
        borderTop: "1px solid var(--border-color-light)",
        paddingTop: "30px",
        // display: "none" /* 이 부분은 부모 컴포넌트에서 제어합니다. */,
      }}
    >
      <h3 className="section-title">문제 편집</h3>
      <div className="form-group">
        <label htmlFor="problem-type">유형</label>
        <select id="problem-type">
          <option value="multiple-choice">객관식</option>
          <option value="short-answer">주관식</option>
          <option value="ox">OX 퀴즈</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="problem-content">문제 제목/내용</label>
        <div className="editor-toolbar">
          <Button iconOnly icon="bold"></Button>
          <Button iconOnly icon="italic"></Button>
          <Button iconOnly icon="underline"></Button>
          <Button iconOnly icon="link"></Button>
        </div>
        <textarea
          id="problem-content"
          placeholder="문제 내용을 입력하세요."
          style={{
            minHeight: "200px",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTop: "1px solid #eee",
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label>선택지</label>
        <InputField type="text" placeholder="선택지 1" />
        <InputField type="text" placeholder="선택지 2" />
        <Button small secondary icon="plus" style={{ marginTop: "10px" }}>
          선택지 추가
        </Button>
      </div>
      <div className="form-group">
        <label htmlFor="problem-answer">정답</label>
        <InputField
          type="text"
          id="problem-answer"
          placeholder="정답을 입력하세요."
        />
      </div>
      <div className="form-group">
        <label htmlFor="problem-explanation">해설</label>
        <textarea
          id="problem-explanation"
          placeholder="문제 해설을 입력하세요."
          style={{ minHeight: "100px" }}
        ></textarea>
      </div>
      <div className="editor-actions">
        <Button primary icon="save">
          문제 저장
        </Button>
        <Button secondary icon="times">
          취소
        </Button>
      </div>
    </div>
  );
};

export default MaterialEditor;
