"use strict";

// swagger

/**
 * @swagger
 * /login:
 *   get:
 *     description: 로그인 화면을 출력한다.
 *     responses:
 *       200:
 *         description: Success
 * /register:
 *   get:
 *     description: 회원가입 화면을 출력한다.
 *     responses:
 *       200:
 *         description: Success
 * /fileUpload:
 *   get:
 *     description: 파일업로드 화면(ver1)을 출력한다.
 *     responses:
 *       200:
 *         description: Success
 * /fileUpload2:
 *   get:
 *     description: 파일업로드 화면(ver2)을 출력한다.
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: 로그인을 위한 정보를 얻어온다.
 *     parameters:
 *      - name: id
 *        description: 아이디
 *        in: formData
 *        required: true
 *        type: string
 *      - name: psword
 *        description: 비밀번호
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 * /register:
 *   post:
 *     description: 회원가입을 위한 정보를 등록한다.
 *     parameters:
 *      - name: id
 *        description: 아이디
 *        in: formData
 *        required: true
 *        type: string
 *      - name: psword
 *        description: 비밀번호
 *        in: formData
 *        required: true
 *        type: string
 *      - name: name
 *        description: 이름
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 * /fileUpload:
 *   post:
 *     description: 파일의 정보를 등록한다.
 *     parameters:
 *      - name: name
 *        description: 파일명
 *        in: formData
 *        required: true
 *        type: string
 *      - name: url
 *        description: base64로 인코딩된 파일주소
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 * /fileUpload2:
 *   post:
 *     description: 파일의 정보를 등록한다.
 *     parameters:
 *      - name: id
 *        description: 파일의 고유 id
 *        in: formData
 *        required: true
 *        type: string
 *      - name: name
 *        description: 파일명
 *        in: formData
 *        required: true
 *        type: string
 *      - name: url
 *        description: base64로 인코딩된 파일주소
 *        in: formData
 *        required: true
 *        type: string
 *      - name: size
 *        description: 파일의 사이즈
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */

